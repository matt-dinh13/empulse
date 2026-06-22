---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model"
domain: "Analysis Model"
element_id: 1776553
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Serial number

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model

## 📝 Notes

Source: 

Actions:
Disabled if value of form.Commodity type has GetCommodityTypeDataResponse.flag.SKUDisabled
on Confirm commodity action:

	
- value is set into CreateCommodityDataRequest.commodity.values.serialNumber

on form open:

	
- field is empty


Optional
Localization code: ACC_CommoditySerialNumber

## 📊 Appears In (1 diagrams)

- Custom: Cardless POS transaction request - User Interface
