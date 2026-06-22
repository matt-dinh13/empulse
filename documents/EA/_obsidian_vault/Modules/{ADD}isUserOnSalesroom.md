---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Consumed/REST/HOMESIS/v1/isUserOnSalesroom"
domain: "Modules"
element_id: 1802318
diagrams: 1
connections: 0
tags:
  - class
  - modules
---

# 🔷 {ADD}isUserOnSalesroom

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Consumed/REST/HOMESIS/v1/isUserOnSalesroom

## 📝 Notes

{ADD CLM-4779/}

<ENV_URL>/users/{userCode}/salesrooms/{salesroomCode}/exists

e.g.
https://homesis.id00a1.cz.infra/homesis/restful/swagger-ui.html#/user-rest-controller/isUserOnSalesroomUsingGET

## 📊 Appears In (1 diagrams)

- Logical: isUserOnSalesroom

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| userCode | string |  |
| salesroomCode | string |  |
