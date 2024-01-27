import { QuestionGateway } from "../../../../hexagon/ports/question.gateway";
import { Question } from "../../../../hexagon/models/question";

export class InMemoryQuestionGateway implements QuestionGateway {
  private _nextQuestions: Array<Question> = [];

  async pickQuestion(): Promise<Question> {
    return this._nextQuestions[0];
  }

  set nextQuestions(questions: Array<Question>) {
    this._nextQuestions = questions;
  }
}
