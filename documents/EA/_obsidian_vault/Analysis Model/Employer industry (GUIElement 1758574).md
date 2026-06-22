---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Employment information - product AF/Employer/University - product AF"
domain: "Analysis Model"
element_id: 1758574
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Employer industry

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Employment information - product AF/Employer/University - product AF

## 📝 Notes

Client's employer industry.

Other:

	
- Enumeration values are taken from the Industry and filtered according to the following conditions:
   - Only the values applicable for the selected Economical status (i.e. Economical_Status[.Name = value from the Economical status field]->Industry_to_Economical_Status->Industry) are taken into account - such values are then further filtered as follows:
      a) All regular values (i.e. Industry.Specific_For is null) are included.
      b) Values related to the applicable joint lender (i.e. Industry.Specific_For = selected joint lender in offer) are included.


LDM:
Temporary_Application->TempAppl_Employment.Employer_Industry

Localization code:
APP_EmployersIndustry

## 🔗 Connections (4)

- ← Generalization: [[Employer industry]]
- ← Generalization: [[Employer industry (GUIElement 1238379)]]
- ← Generalization: [[Employer industry (GUIElement 1513058)]]
- → Dependency: [[Industry (Enumeration 1758720)]]

## 📊 Appears In (1 diagrams)

- Custom: Employer/University - product AF
