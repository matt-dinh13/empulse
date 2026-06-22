---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Message Server/SendEmailMessageWS"
domain: "Analysis Model"
element_id: 1148344
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 SimpleEmailMessageType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Message Server/SendEmailMessageWS

## 🔗 Connections (5)

- → Generalization: [[EmailMessageType]]
- → Dependency: [[InlineAttachmentType]]
- → Dependency: [[HtmlTextType]]
- → Dependency: [[CabinetAttachmentType]]
- ← Dependency: [[SendEmailMessagesRequest]]

## 📊 Appears In (1 diagrams)

- Logical: SendEmailMessageWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| htmlText | HtmlTextType |  |
| alternativeText | string |  |
| inline | InlineAttachmentType |  |
| cabinet | CabinetAttachmentType |  |
