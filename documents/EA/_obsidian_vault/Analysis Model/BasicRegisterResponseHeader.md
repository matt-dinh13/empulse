---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/RCM/rcmWS/Types/Common (v2)"
domain: "Analysis Model"
element_id: 1376517
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 BasicRegisterResponseHeader

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/RCM/rcmWS/Types/Common (v2)

## 🔗 Connections (4)

- → Dependency: [[ResultDescription]]
- → Dependency: [[Result (Class 1376518)]]
- ← Generalization «XSDextension»: [[RegisterResponseHeader]]
- → Dependency: [[FoundIn]]

## 📊 Appears In (2 diagrams)

- Logical: CommonRegisterResponseMessage
- Logical: rcmWS - Artajasa

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| messageId | string |  |
| result | Result |  |
| foundIn | FoundIn |  |
| resultDescription | ResultDescription |  |
