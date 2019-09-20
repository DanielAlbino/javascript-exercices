"use stric";

Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = async (even = {}) => {
  console.log("Hello World!");
  const response = JSON.stringify(event, null, 2);
  return response;
};
