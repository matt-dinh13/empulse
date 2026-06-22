---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Loan Agreement/Loan Agreement Notification"
domain: "Analysis Model"
element_id: 1634500
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 LoanAgreementNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Loan Agreement/Loan Agreement Notification

## 📝 Notes

General base for notifications about various loan-agreement-related events.

Other:
URL of an interested e-shop (i.e. Salesroom.URL) is sent within the JMS header (key URL):

	
- If the salesroom was specified within the request for respective operation (i.e. RequestBase.salesroomCode is not null), then such salesroom is applicable.
	
- Otherwise the salesroom, where the respective application was created (Contract.Salesroom_Code), is used instead.

Such URL (optional information) then defines the target consumer for loan agreement notifications rerouting on the OSB side.

## 🔗 Connections (3)

- ← Generalization: [[PrepareAgreementDocumentationSuccessfulNotification]]
- ← Generalization: [[SignAgreementDocumentationSuccessfulNotification]]
- ← Generalization: [[LoanAgreementFailureNotification]]

## 📊 Appears In (1 diagrams)

- Logical: LoanAgreementNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| applicationCode | string |  |
