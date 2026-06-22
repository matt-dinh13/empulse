---
type: Package
stereotype: ""
package: ""
domain: "_Uncategorized"
element_id: 1854644
diagrams: 0
connections: 0
tags:
  - package
  - _uncategorized
---

# 📁 Insurance based on EOM message (new)

> **Type**: Package
> **Package**: N/A

## 📝 Notes

This type of insurance is run based two conditions:

	
- When the Insurance is originated on the contract, the 'switch on' message is sent to the AM
	
- AM sends a 'EOM' message with calculated insurance premium amount which is processed inn the Insurance module


If this type of insurance is to be terminated (cancelled as well), 'switch off' message has to be sent into the AM
