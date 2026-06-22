---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/createBusinessEvent"
domain: "Modules"
element_id: 1840038
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 BusinessEventRequestBody

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Provided/REST/Application Interface Model/Contracts/v12/createBusinessEvent

## 📝 Notes

{ADD CLM-5001/}

POST https://coma.ph00a1.cz.infra/swagger/swagger-ui/index.html#/1.%20Contracts%20V12/createBusinessEvent

## 🔗 Connections (2)

- → Dependency: [[CreateContractBusinessEventAttribute]]
- ← Dependency: [[Contract (Interface 1839994)]]

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
