---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/Logical Data Model"
domain: "Analysis Model"
element_id: 1371277
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 SMS Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/Logical Data Model

## 📝 Notes

Settings representing SMS type to be chosen by Notification Message Definition.

For more information see: https://docs.cz.infra/mss/doc/MessagingGuide.html

## 🔗 Connections (4)

- → Dependency: [[Report Level]]
- → Generalization: [[Notification Message Definition Type]]
- → Dependency: [[Priority Type]]
- → Dependency: [[Report Content Type]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Effective Date | DateTime |  |
| Expire Date | DateTime |  |
| Interactive | Boolean |  |
| Answer Till | DateTime |  |
| Report Content Type | ReportContentType |  |
| Report Level | ReportLevel |  |
| Priority | Priority Type |  |
