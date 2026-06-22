---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Contact information - product AF"
domain: "Analysis Model"
element_id: 1738711
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Amount of necessary related persons

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Contact information - product AF

## 📝 Notes

This label displays information about minimum amount of necessary related persons on AF (based on application form parameter MinNumberOfRelatedPersons). 

This label is hidden if any of the following conditions is met:

	
- Application Form Parameters.MinNumberOfRelatedPersons = 0
	
- (Application Form Parameters.MinNumberOfRelatedPersons - currently added related persons) = 0)


Localization code:
APP_MinOfRelatedPersons

## 🔗 Connections (4)

- ← Generalization: [[Amount of necessary related persons]]
- ← Generalization: [[Amount of necessary related persons (GUIElement 1533633)]]
- ← Generalization: [[Amount of necessary related persons (GUIElement 1724568)]]
- ← Generalization: [[Amount of necessary related persons (GUIElement 1813910)]]

## 📊 Appears In (1 diagrams)

- Custom: Contact information - product AF
