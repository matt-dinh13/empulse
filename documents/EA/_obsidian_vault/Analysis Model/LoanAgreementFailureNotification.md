---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Loan Agreement/Loan Agreement Notification"
domain: "Analysis Model"
element_id: 1634498
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 LoanAgreementFailureNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Loan Agreement/Loan Agreement Notification

## 📝 Notes

General base for notifications about various loan-agreement-related failure events.

## 🔗 Connections (4)

- ← Generalization: [[PrepareAgreementDocumentationFailedNotification]]
- → Dependency: [[ValidationErrors (Class 1634506)]]
- → Generalization: [[LoanAgreementNotification]]
- ← Generalization: [[SignAgreementDocumentationFailedNotification]]

## 📊 Appears In (2 diagrams)

- Logical: LoanAgreementFailureNotification - Common
- Logical: LoanAgreementNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| errorCode | string |  |
| validationErrors | ValidationErrors |  |
