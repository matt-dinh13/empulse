---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Print Server/COMMON for Print Server/Custom SOAP Faults"
domain: "Analysis Model"
element_id: 1226724
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Fault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Print Server/COMMON for Print Server/Custom SOAP Faults

## 📝 Notes

Fault reporting structure.

Note: Common for all applicable SOAP Web Services provided by Message Server or Print Server - https://docs.cz.infra/mss/doc/api/web-services/CustomSOAPFault.html

## 🔗 Connections (1)

- → Dependency: [[detail]]

## 📊 Appears In (2 diagrams)

- Logical: Custom SOAP Faults
- Logical: Custom SOAP Faults

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| faultcode | QName |  |
| faultstring | string |  |
| faultactor | anyURI |  |
| detail | detail |  |
