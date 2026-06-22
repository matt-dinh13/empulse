---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/RCM/rcmWS/Types/Common (v2)"
domain: "Analysis Model"
element_id: 1376521
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 RegisterRequestHeader

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/RCM/rcmWS/Types/Common (v2)

## 🔗 Connections (5)

- → Generalization «XSDextension»: [[BasicRegisterRequestHeader]]
- → Dependency: [[CacheSearchType]]
- → Dependency: [[CacheBehaviour]]
- ← Dependency: [[CommonRegisterRequestMessage]]
- ← Dependency: [[RegisterRequest]]

## 📊 Appears In (2 diagrams)

- Logical: CommonRegisterRequestMessage
- Logical: rcmWS - Artajasa

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| key | string |  |
| cuid | long |  |
| cacheBehaviour | CacheBehaviour |  |
| cacheSearchType | CacheSearchType |  |
| cacheValidityPeriod | long |  |
