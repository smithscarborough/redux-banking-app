export const ACTION_DEPOSIT = "ACTION_DEPOSIT";
export const ACTION_WITHDRAWAL = "ACTION_WITHDRAWAL";

export function createDeposit(amount, account) {
  return {
    type: ACTION_DEPOSIT,
    amount,
    account
  };
}

export function createWithdrawal(amount, account) {
  return {
    type: ACTION_WITHDRAWAL,
    amount: amount,
    account: account
  }
}