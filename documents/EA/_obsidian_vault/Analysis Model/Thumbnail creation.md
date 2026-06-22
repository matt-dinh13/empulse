---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules"
domain: "Analysis Model"
element_id: 1623722
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Thumbnail creation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules

## 📝 Notes

Thumbnail of the photo will be resized as follows:

	
- Check which side of the photo is longer - width or height
	
- Longer side will be compressed to size 250px (Note: set in system properties)
	
- Shorter side will be compress by the same aspect ratio


Example:

	
- original photo size has width=590px and height = 350px
	
- width > height
	
- width will be compressed to 250px
	
- heght will be compressed by  350 * (250/590) ≈ 148px

## 🔗 Connections (1)

- ← Dependency: [[Application Processing]]

## 📊 Appears In (2 diagrams)

- Custom: General business rules
- Use Case: Fill in application
