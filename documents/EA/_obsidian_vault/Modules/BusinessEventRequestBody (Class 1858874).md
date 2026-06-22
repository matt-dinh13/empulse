---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/createBusinessEvent"
domain: "Modules"
element_id: 1858874
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 BusinessEventRequestBody

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/createBusinessEvent

## 📝 Notes

{ADD CLM-5001/}

POST https://coma.ph00a1.cz.infra/swagger/swagger-ui/index.html#/1.%20Contracts%20V12/createBusinessEvent

## 🔗 Connections (2)

- → Dependency: [[CreateContractBusinessEventAttribute (Class 1858876)]]
- ← Dependency: [[Contracts (Interface 1868512)]]

## 📊 Appears In (1 diagrams)

- Logical: createBusinessEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| salesroomCode | string |  |
| businessDate | string |  |
| originatedBy | strng |  |
| attributes | CreateContractBusinessEventAttribute |  |
