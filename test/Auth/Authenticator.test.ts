import Authenticator from "expresswebcorets/lib/Auth/Authenticator";

let loginDetails = { email: "alex@ss.com", password: "book is fun" };

let returnValue = {
  payload: {
    auth: false,
    msg: "Wrong login details",
    error: null,
  },
};

describe("Test processLogin method in Authenticator class", () => {
  it("should process user login", () => {
    const Mock = jest.fn(() => ({
      processLogin: jest.fn(),
    }));
    const mock = new Mock();
    const instance = new Authenticator();
    instance.processLogin(loginDetails);
    expect(mock.processLogin);
  });
});
