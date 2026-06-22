---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Generated Messages/Insurance change notifications"
domain: "Analysis Model"
element_id: 1856589
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 LoanServiceRequestStatusDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Generated Messages/Insurance change notifications

## 📝 Notes

Service request status log structure

## 🔗 Connections (2)

- → Dependency: [[LoanServiceRequestStatusTypeDto (Enumeration 1856594)]]
- ← Dependency: [[LoanServiceRequestRequest (Class 1856588)]]

## 📊 Appears In (1 diagrams)

- Logical: Insurance change notifications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| changeType | LoanServiceRequestStatusTypeDto |  |
| changeDate | dateTime |  |
