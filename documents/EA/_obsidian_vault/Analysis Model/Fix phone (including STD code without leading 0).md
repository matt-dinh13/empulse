---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/IN/Personal information IN/Contact to client IN"
domain: "Analysis Model"
element_id: 1715059
diagrams: 1
connections: 6
tags:
  - guielement
  - analysis-model
---

# 🖥️ Fix phone (including STD code without leading 0)

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/IN/Personal information IN/Contact to client IN

## 📝 Notes

Other:
Rules for 2BoD if the Queue control panel is displayed:

	
- If the original value is changed, new value is replicated to the Fix phone field of the Queue control panel and the Verified check box is unchecked

## 🔗 Connections (6)

- → Dependency: [[Unique client phones (Boundary 1715061)]]
- → Dependency: [[Optional (Action 1789801)]]
- → Dependency: [[Number of unique contact phones (Action 1773161)]]
- → Dependency: [[Client's Fix Phone]]
- → Generalization: [[Home phone (GUIElement 1539289)]]
- → Dependency: [[Unique phones (Action 1773162)]]

## 📊 Appears In (1 diagrams)

- Custom: Contact to client IN
