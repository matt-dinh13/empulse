---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/UseCase Model"
domain: "Analysis Model"
element_id: 1335467
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Compose SMS message

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Client notifications/UseCase Model

## 📝 Notes

Requirement for composing message in case

Input:
messageParameters - list of attributes with key and value
templateBody - template body SMS will be composed from

Output:
SMStext - text of SMS message

Steps:
Load from property file message template
For every attribute in attributes do:
Get key, search for it in template, if you find it, replace key by value and save it to SMSText, repeat for every attribute
Format data as described in Data custom formats rule
Return SMSText

How attribute looks like:
${KEY}

Available attributes:
-different by template, see this document for more information

## 🔗 Connections (2)

- → Dependency: [[Data custom formats]]
- ← Dependency: [[03.702 Compose and send notification message]]

## 📊 Appears In (1 diagrams)

- Use Case: SMS notification
