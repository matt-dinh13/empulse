---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model"
domain: "Analysis Model"
element_id: 1776526
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ IMEI

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model

## 📝 Notes

Source: 

Actions:
Visible and enabled if value of form.Commodity type has GetCommodityTypeDataResponse.flag.IMEI
on Confirm commodity action:

	
- value is set into CreateCommodityDataRequest.commodity.values.imei

on form open:

	
- field is empty


Optional

Localization code: ACC_IMEI

## 🔗 Connections (1)

- → Generalization: [[IMEI (GUIElement 1686233)]]

## 📊 Appears In (1 diagrams)

- Custom: Cardless POS transaction request - User Interface
