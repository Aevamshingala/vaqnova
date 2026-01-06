class Apiresponce {
  constructor(statuscode, data, message = "success") {
    //success add by me
    this.statuscode = statuscode;
    this.data = data;
    this.message = message;
    this.success = statuscode < 400;
  }
}

export { Apiresponce };
