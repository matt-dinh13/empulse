---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/Use case model"
domain: "Analysis Model"
element_id: 1776325
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 ResultCodeCreate enumeration localization

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/Use case model

## 📝 Notes

This rule describes localization of return codes of ResultCodeCreate on commodity creation

INVALID_COMMODITY_TYPE, "Invalid commodity type" 
INVALID_PRODUCER, "Invalid producer"
INVALID_PRICE, "Invalid price of commodity"
INVALID_MODEL, "Invalid model of commodity"
INVALID_IMEI, "Invalid IMEI of the mobile phone"
{ADD CLM-1480}INVALID_MSISDN, "Invalid MSISDN of the mobile phone{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[12.632 Create request for POS transaction without card]]

## 📊 Appears In (1 diagrams)

- Use Case: Cardless transaction request - Use case model
