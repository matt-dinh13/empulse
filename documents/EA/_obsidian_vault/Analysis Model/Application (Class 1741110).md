---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/LoanApplicationData/LoanApplicationData_v1"
domain: "Analysis Model"
element_id: 1741110
diagrams: 1
connections: 15
tags:
  - class
  - analysis-model
---

# 🔷 Application

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/LoanApplicationData/LoanApplicationData_v1

## 📝 Notes

Loan application data.

## 🔗 Connections (15)

- → Dependency: [[PaymentChannel]]
- → Dependency: [[ClientPossession]]
- → Dependency: [[Contact (Class 1741129)]]
- → Dependency: [[Document (Class 1741125)]]
- → Dependency: [[RelatedPerson (Class 1741114)]]
- → Dependency: [[Card (Class 1741123)]]
- → Dependency: [[PaymentChannel]]
- → Dependency: [[PersonCustomAttribute]]
- → Dependency: [[SecurityQuestion]]
- → Dependency: [[Commodity (Class 1741128)]]
- → Dependency: [[PreferredLanguage]]
- → Dependency: [[ExternalIdentifier]]
- → Dependency: [[ClientAddress]]
- → Dependency: [[Employment (Class 1741109)]]
- ← Dependency: [[LoanApplicationData_v1 (Class 1741108)]]

## 📊 Appears In (1 diagrams)

- Logical: LoanApplicationData_v1

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| XSDelementAttributes |  |  |
| addresses | ClientAddress |  |
| contacts | Contact |  |
| documents | Document |  |
| employment | Employment |  |
| clientPossessions | ClientPossession |  |
| preferredLanguages | PreferredLanguage |  |
| securityQuestion | SecurityQuestion |  |
| personCustomAttributes | PersonCustomAttribute |  |
| externalIdentifiers | ExternalIdentifier |  |
| relatedPersons | RelatedPerson |  |
| commodities | Commodity |  |
| disbursementPaymentChannel | PaymentChannel |  |
| repaymentPaymentChannel | PaymentChannel |  |
| cards | Card |  |
