import { initReduxStore, ReduxStore } from "../../../../../store/reduxStore";
import { calculateEstimatedTimeValue } from "../index";
import { profileSlice } from "../../../reducers/profile.reducer";

describe("Calculate estimated time value", () => {
  let store: ReduxStore;

  const profileName = "John Doe";

  beforeEach(() => {
    store = initReduxStore({});
    store.dispatch(profileSlice.actions.createProfile());
    store.dispatch(profileSlice.actions.setName({ name: profileName }));
  });

  it.each`
    value | expectedValue
    ${1}  | ${1 / 4}
    ${2}  | ${2 / 4}
    ${3}  | ${3 / 4}
  `(
    "one quarter of the estimation should be dedicated to one hour phone call value",
    async ({
      value,
      expectedValue,
    }: {
      value: number;
      expectedValue: number;
    }) => {
      givenTimeValues(timeValuesFactory({ "60minutesPhoneCallValue": value }));

      await store.dispatch(calculateEstimatedTimeValue());

      expectEstimatedTimeValue(expectedValue);
    },
  );

  it.each`
    value | expectedValue
    ${1}  | ${1 / 4}
    ${2}  | ${2 / 4}
    ${3}  | ${3 / 4}
  `(
    "one quarter of the estimation should be dedicated to one hour easy task value",
    async ({
      value,
      expectedValue,
    }: {
      value: number;
      expectedValue: number;
    }) => {
      givenTimeValues(timeValuesFactory({ "60minutesEasyTaskValue": value }));

      await store.dispatch(calculateEstimatedTimeValue());

      expectEstimatedTimeValue(expectedValue);
    },
  );

  it.each`
    value | expectedValue
    ${1}  | ${1 / 4}
    ${2}  | ${2 / 4}
    ${3}  | ${3 / 4}
  `(
    "one quarter of the estimation should be dedicated to satisfaction threshold",
    async ({
      value,
      expectedValue,
    }: {
      value: number;
      expectedValue: number;
    }) => {
      givenTimeValues(timeValuesFactory({ satisfactionThreshold: value }));

      await store.dispatch(calculateEstimatedTimeValue());

      expectEstimatedTimeValue(expectedValue);
    },
  );

  it("one quarter of the estimation should be dedicated to monthly income properties", async () => {
    {
      givenTimeValues(
        timeValuesFactory({ monthlyIncome: 1, monthlyWorkedHours: 1 }),
      );
      await store.dispatch(calculateEstimatedTimeValue());
      expectEstimatedTimeValue(1 / 4);
    }
    {
      givenTimeValues(
        timeValuesFactory({ monthlyIncome: 1, monthlyWorkedHours: 2 }),
      );
      await store.dispatch(calculateEstimatedTimeValue());
      expectEstimatedTimeValue(1 / 2 / 4);
    }
    {
      givenTimeValues(
        timeValuesFactory({
          monthlyIncome: 1,
          monthlyWorkedHours: 1,
          monthlyHoursSpentInTransport: 2,
        }),
      );
      await store.dispatch(calculateEstimatedTimeValue());
      expectEstimatedTimeValue(1 / (1 + 2) / 4);
    }
  });

  it("requires at least one monthly worked hour", async () => {
    givenTimeValues(timeValuesFactory({ monthlyWorkedHours: 0 }));
    await store.dispatch(calculateEstimatedTimeValue());
    expectEstimatedTimeValue(null);
  });

  it("estimation is the sum of the four quarters", async () => {
    givenTimeValues(
      timeValuesFactory({
        "60minutesPhoneCallValue": 1,
        "60minutesEasyTaskValue": 1,
        satisfactionThreshold: 1,
        monthlyIncome: 1,
        monthlyWorkedHours: 1,
        monthlyHoursSpentInTransport: 2,
      }),
    );

    await store.dispatch(calculateEstimatedTimeValue());

    expectEstimatedTimeValue((1 + 1 + 1 + 1 / (1 + 2)) / 4);
  });

  const defaultTimeValues = () => ({
    "60minutesPhoneCallValue": 0,
    "60minutesEasyTaskValue": 0,
    monthlyIncome: 0,
    monthlyWorkedHours: 1,
    monthlyHoursSpentInTransport: 0,
    satisfactionThreshold: 0,
  });

  type TimeValues = ReturnType<typeof defaultTimeValues>;

  const timeValuesFactory = (overrides: Partial<TimeValues> = {}) => ({
    ...defaultTimeValues(),
    ...overrides,
  });

  const givenTimeValues = (values: TimeValues) => {
    store.dispatch(
      profileSlice.actions.setOneHourPhoneCallValue({
        value: values["60minutesPhoneCallValue"],
      }),
    );
    store.dispatch(
      profileSlice.actions.setOneHourEasyTaskValue({
        value: values["60minutesEasyTaskValue"],
      }),
    );
    store.dispatch(
      profileSlice.actions.setIncomeDetail({
        monthlyWorkedHours: values.monthlyWorkedHours,
        monthlyHoursSpentInTransport: values.monthlyHoursSpentInTransport,
        monthlyIncome: values.monthlyIncome,
      }),
    );
    store.dispatch(
      profileSlice.actions.setSatisfactionThreshold({
        satisfactionThreshold: values.satisfactionThreshold,
      }),
    );
  };

  const expectEstimatedTimeValue = (value: number | null) => {
    expect(store.getState().profile?.estimatedTimeValue).toEqual(value);
  };
});
