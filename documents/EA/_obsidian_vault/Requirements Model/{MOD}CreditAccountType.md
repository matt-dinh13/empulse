---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9532 Expiration of Virtual Limit Contracts - Solution as required by Regulation"
domain: "Requirements Model"
element_id: 1821435
diagrams: 2
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}CreditAccountType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9532 Expiration of Virtual Limit Contracts - Solution as required by Regulation

## 📝 Notes

Object containing data about the credit account related to the respective contract.

Values of individual sub-elements are retrieved by calling the {ADD LOR-9718}AM API{/ADD} {DEL LOR-9718}GetAccountRequest (method of AccountManagementWS){/DEL} with following parameters on the input:
   - accountNumber = Contract.Credit_Account_Number

Note: Mentioned service is called only if Contract.Credit_Account_Number is not null (otherwise this element is not filled).

## 🔗 Connections (1)

- ← Dependency: [[{MOD}DocumentData (Class 1821417)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9532 Expiration of Virtual Limit Contracts - Solution as required by Regulation
- Logical: HO_CONTRACT_DATA - contract data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | string |  |
| accountType | string |  |
| {ADD}expirationDate | string |  |
