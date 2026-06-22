---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data"
domain: "Modules"
element_id: 1309357
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 {DEL}ServiceSMSNDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data

## 📝 Notes

{DEL PCG-1340/}
Specific for Service.Type = SMSN

## 🔗 Connections (2)

- → Dependency «mapping»: [[{DEL}SMS Notification Service To Notification Type]]
- ← Dependency: [[{MOD}ServiceTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: Service data synchronization mapping
- Logical: Service SMSN Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| SMSNotificationType | Text |  |
