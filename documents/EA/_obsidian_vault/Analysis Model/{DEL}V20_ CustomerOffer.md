---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationOfferManagementWS/{DEL}ApplicationOfferManagementWS_v7"
domain: "Analysis Model"
element_id: 1815203
diagrams: 1
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}V20: CustomerOffer

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationOfferManagementWS/{DEL}ApplicationOfferManagementWS_v7

## 📝 Notes

{DEL LOR-8678/}
Technically it is reused from http://homecredit.net/hss/customeroffer/v20

## 🔗 Connections (8)

- → Dependency: [[{DEL}V20_ Commodity]]
- → Dependency: [[{DEL}V20_ Product]]
- → Dependency: [[{DEL}V20_ RELInterestRate]]
- ← Generalization «XSDextension»: [[{DEL}ApplicationOffer]]
- → Dependency: [[{DE}V20_ Installment]]
- → Dependency: [[{DEL}V20_ Service]]
- → Dependency: [[{DEL}V20_ TermsAndConditions]]
- → Dependency: [[{DEL}V20_ Fee]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationOfferManagementWS_v7 - Get Offers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| product | {DEL}Product |  |
| termsAndConditions | {DEL}TermsAndConditions |  |
| installments | {DEL}Installment |  |
| fees | {DEL}Fee |  |
| services | {DEL}Service |  |
| commodities | {DEL}Commodity |  |
| totalPrice | decimal |  |
| cashPayment | decimal |  |
| downPayment | decimal |  |
| terms | int |  |
| totalInstallment | decimal |  |
| loanAmount | decimal |  |
| netCreditLimit | decimal |  |
| providedCreditLimit | decimal |  |
| minimalInstallmentAmount | decimal |  |
| totalPaymentPerCredit | decimal |  |
| annualInterestRate | decimal |  |
| RELInterestRate | {DEL}RELInterestRate |  |
| presentedInterestRate1 | decimal |  |
| presentedInterestRate2 | decimal |  |
| presentedInterestRate3 | decimal |  |
| totalInsurancePremium | decimal |  |
| sufficientClientDocuments | boolean |  |
| annuity | decimal |  |
| preferredDueDay | int |  |
| sourceOfferId | string |  |
