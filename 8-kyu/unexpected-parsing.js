function getStatus(isBusy) {
  return { status: isBusy ? "busy" : "available" };
}

console.log(getStatus(true));
console.log(getStatus(false));
