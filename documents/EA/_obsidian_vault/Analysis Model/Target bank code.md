---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model"
domain: "Analysis Model"
element_id: 1538503
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Target bank code

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model

## 📝 Notes

It allows to filer payments according to code of target bank account. 
If bank account from payment is technical, then contract bank account is used instead.   
The field is auto-completed according to the rule Autocompletion - values form Bank.Code are used (only active records).  

LDM:
System finds outgoing payments where bank code of recipient bank account (recBankAccountBankCode below) equals entered value.

System determines recBankAccountBankCode as follows:
1. If a Salesroom is assigned to outgoingPayment (outgoingPayment.PaymentChannel.Salesroom) then:
1.1 If exists valid BankAccount assigned to Salesroom and marked for payments 
1.1.1 then
- recBankAccountNumber = Salesroom.BankAccount.AccountNumber
- recBankAccountBankCode = Salesroom.BankAccount.BankBranch.Bank.Code
1.1.2 else is found valid BankAccount assigned to Salesroom.Partner and marked for payments and
- recBankAccountBankCode = Partner.BankAccount.BankBranch.Bank.Code
else
2. If a BankAccount is assigned to outgoingPayment (outgoingPayment.PaymentChannel.BankAccount) then:
- recBankAccountBankCode = BankAccount.BankBranch.Bank.Code
3.If a TargetBankAccount is assigned to outgoingPayment (outgoingPayment.PaymentChannel.TargetBankAccount) then:
- targetBankAccountBankCode = TargetBankAccount.BankBranch.Bank.Code
4. In other cases null values are returned.


Mandatory: No
DataType: Characters

Localization code:
PAY_OutgoingPaymentClientsBABankCode

## 🔗 Connections (1)

- → Dependency: [[Autocompletion]]

## 📊 Appears In (1 diagrams)

- Custom: Search criteria - UNPAID
