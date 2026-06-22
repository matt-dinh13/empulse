---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Logical Data Model"
domain: "Modules"
element_id: 1147564
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 Blocked Marketing Offer

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Logical Data Model

## 📝 Notes

Registry of Marketing Offers blocked for particular client.
Blocking is usually used in case client already used particular Marketing Offer for contract origination to prevent its reusing.

## 🔗 Connections (1)

- → Dependency: [[Marketing Offer Blocker Type]]

## 📊 Appears In (1 diagrams)

- Logical: Blocking of Marketing Offers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CUID | string |  |
| OfferID | string |  |
| Blocker Type | Marketing Offer Blocker Type |  |
| BlockerID | string |  |
| Note | text |  |
| Archived | boolean | False |
