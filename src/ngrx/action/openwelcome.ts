import { Action } from "@ngrx/store";

export const OPEN_WELCOME = "OPEN_WELCOME";
export const CLOSE_WELCOME = "CLOSE_WELCOME";
export const SUCCESS_OPEN_WELCOME = "SUCCESS_OPEN_WELCOME";
export const FAIL_OPEN_WELCOME = "FAIL_OPEN_WELCOME";

export const SUCCESS_CLOSE_WELCOME = "SUCCESS_CLOSE_WELCOME";
export const FAIL_CLOSE_WELCOME = "Fail_CLOSE_WELCOME";

export class OpenWelcomeAction implements Action {
  readonly type = OPEN_WELCOME;
  constructor() {}
}

export class CloseWelcomeAction implements Action {
  readonly type = CLOSE_WELCOME;
  constructor() {}
}

export class OpenWelcomeSuccess implements Action {
  readonly type = SUCCESS_OPEN_WELCOME;
  constructor() {}
}

export class OpenWelcomeFail {
  readonly type = FAIL_OPEN_WELCOME;
  constructor() {}
}

export class ＣloseWelcomeSuccess {
  readonly type = SUCCESS_CLOSE_WELCOME;
  constructor() {}
}

export class CloseWelcomeFail {
  readonly type = FAIL_CLOSE_WELCOME;
  constructor() {}
}
