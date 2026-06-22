---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/LoanApplicationData/LoanApplicationData_v2"
domain: "Analysis Model"
element_id: 1741217
diagrams: 1
connections: 15
tags:
  - class
  - analysis-model
---

# 🔷 Application

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided notification messages/Asynchronous Message/LoanApplicationData/LoanApplicationData_v2

## 📝 Notes

Loan application data.

## 🔗 Connections (15)

- → Dependency: [[ExternalIdentifier (Class 1741222)]]
- → Dependency: [[Contact (Class 1741225)]]
- → Dependency: [[RelatedPerson (Class 1741219)]]
- → Dependency: [[Document (Class 1741220)]]
- → Dependency: [[Card (Class 1741216)]]
- → Dependency: [[Employment (Class 1741214)]]
- → Dependency: [[ClientAddress (Class 1741212)]]
- → Dependency: [[PaymentChannel (Class 1741209)]]
- → Dependency: [[PaymentChannel (Class 1741209)]]
- → Dependency: [[PersonCustomAttribute (Class 1741208)]]
- → Dependency: [[SecurityQuestion (Class 1741207)]]
- → Dependency: [[ClientPossession (Class 1741206)]]
- → Dependency: [[PreferredLanguage (Class 1741205)]]
- → Dependency: [[Commodity (Class 1741202)]]
- ← Dependency: [[LoanApplicationData_v2 (Class 1741201)]]

## 📊 Appears In (1 diagrams)

- Logical: LoanApplicationData_v2

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
