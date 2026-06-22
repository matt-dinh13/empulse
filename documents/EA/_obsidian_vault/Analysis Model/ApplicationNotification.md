---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Application/Application Notification"
domain: "Analysis Model"
element_id: 1819564
diagrams: 1
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 ApplicationNotification

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Application/Application Notification

## 📝 Notes

General base for notifications about various application-related events.

Other:
URL of an interested e-shop (i.e. Salesroom.URL) is sent within the JMS header (key URL):

	
- If the salesroom was specified within the request for respective operation (i.e. RequestBase.salesroomCode is not null), then such salesroom is applicable.
	
- Otherwise the salesroom, where the respective application was created (Contract.Salesroom_Code), is used instead.

Such URL (optional information) then defines the target consumer for loan agreement notifications rerouting on the OSB side.

## 🔗 Connections (8)

- ← Generalization: [[ApplicationDocumentationPreparedNotification]]
- ← Generalization: [[ClientUpdatedOnApplication]]
- ← Generalization: [[ApplicationSignedNotification]]
- ← Generalization: [[ApplicationEvaluationNotification]]
- ← Generalization: [[ApprovedApplicationUpdatedNotification]]
- ← Generalization: [[LoanSummaryNotification]]
- ← Generalization: [[OfferSelectedNotification]]
- ← Generalization: [[ApplicationFailureNotification]]

## 📊 Appears In (1 diagrams)

- Logical: Application Notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| applicationCode | string |  |
