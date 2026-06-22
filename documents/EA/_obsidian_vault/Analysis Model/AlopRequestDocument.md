---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA"
domain: "Analysis Model"
element_id: 1879492
diagrams: 1
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 AlopRequestDocument

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA

## 📝 Notes

Structure of ALOPRequest document

Getting source of bank accounts from PCH by {ADD}Get PaymentChannel data by paymentChannelId
Only PaymentChannels with PCH.paymentchannel.purpose = 'DI' are used

## 🔗 Connections (10)

- → Dependency: [[LoanParameters]]
- → Dependency: [[Get Applicant by Id from CIF]]
- → Dependency: [[Item (Class 1879494)]]
- → Dependency: [[ClientDataDto (Class 1879504)]]
- → Dependency: [[ClientDataDto (Class 1879504)]]
- → Dependency: [[Get PaymentChannel data by paymentChannelId]]
- → Dependency: [[Get application data by code]]
- → Dependency: [[Generate barcode]]
- → Dependency: [[PaymentChannel (Class 1879497)]]
- → Dependency: [[VerificationData (Class 1879491)]]

## 📊 Appears In (1 diagrams)

- Logical: HO_ALOP_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestType | string |  |
| clientData | ClientDataDto |  |
| applicantData | ClientDataDto |  |
| contractCode | string |  |
| uuid | string |  |
| barCode | string |  |
| paymentChannels | PaymentChannel |  |
| signDate | dateTime |  |
| loanCode | string |  |
| signatureVerification | VerificationData |  |
| loanParameters | LoanParameters |  |
| additionalData | Item |  |
