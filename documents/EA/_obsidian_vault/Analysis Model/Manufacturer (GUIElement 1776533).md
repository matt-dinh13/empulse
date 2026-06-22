---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model"
domain: "Analysis Model"
element_id: 1776533
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Manufacturer

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model

## 📝 Notes

Source: the list is filled in with values from GetCodeListResponse.manufacturer. Localized manufacturer.name is showed in the list.

Actions:
Enabled if value of form.Commodity type has GetCommodityTypeDataResponse.flag.SKU, else Disabled

on form open:

	
- If CommodityData  and manufacturer value from input exist, preset with value from CommodityData.manufacturer else the field is empty.

on Confirm commodity action:

	
- value is set into CreateCommodityDataRequest.commodity.values.producerCode


Localization code: ACC_CommodityManufacturer

## 🔗 Connections (1)

- → Dependency: [[Mandatory if field is enabled]]

## 📊 Appears In (1 diagrams)

- Custom: Cardless POS transaction request - User Interface
