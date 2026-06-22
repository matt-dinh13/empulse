---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1844981
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Common rules for displaying of validation result

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Input:
- list of ValidationResult (VRList)
Output:
- IgnoreWarnings - flag indicating that warnings returned in VR can be ignored

For each VRItem in VRList display localized VRItem.resultCode and VRItem.description.

IgnoreWarnings = False
If VRList contains only warnings then:
-- System displays confirmation dialog if it is possible finalize the action (MSG_IgnoreWarning).
-- If user confirms then IgnoreWarnings = True

Return IgnoreWarnings.
