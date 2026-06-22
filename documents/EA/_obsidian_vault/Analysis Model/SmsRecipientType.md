---
type: Class
stereotype: "XSDsimpleType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Message Server/SendSmsMessageWS"
domain: "Analysis Model"
element_id: 1216697
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 SmsRecipientType

> **Type**: Class · **Stereotype**: «XSDsimpleType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Message Server/SendSmsMessageWS

## 📝 Notes

SMS message recipient type with regex pattern restriction. The plus sign (+) is allowed for an international call (IDD) prefix, using number prefix (00, 001,...) for IDD is not recommended. Whitespaces are not allowed.

Restriction:
- minLength value = "6"
- maxLength value = "16"
- pattern value = "\+?[0-9 ]{6,15}"

## 🔗 Connections (1)

- ← Generalization «XSDrestriction»: [[recipient]]

## 📊 Appears In (1 diagrams)

- Logical: SendSmsMessageWS
