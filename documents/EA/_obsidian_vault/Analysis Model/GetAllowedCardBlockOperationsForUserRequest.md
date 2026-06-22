---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardBlockWS"
domain: "Analysis Model"
element_id: 1376950
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 GetAllowedCardBlockOperationsForUserRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardBlockWS

## 📝 Notes

Request to find all privileges regarding card (un)blocking for given user, if pcid is null.
If pcid is not null privileges for unused blocking types are requested.

## 🔗 Connections (1)

- ← Dependency «use»: [[CardBlockWS (Interface 1243619)]]

## 📊 Appears In (1 diagrams)

- Logical: CardBlockWS.GetAllowedCardBlockOperationsForUser

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| pcid | long |  |
