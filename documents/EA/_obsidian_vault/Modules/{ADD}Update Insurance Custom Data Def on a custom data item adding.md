---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Use Case Model/Custom Data"
domain: "Modules"
element_id: 1654043
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Update Insurance Custom Data Def on a custom data item adding

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Use Case Model/Custom Data

## 📝 Notes

{ADD CSI-769 /}

Beside Insurance Program reference, Custom Data Def Code and Label, the Insurance Custom Data Def (ICD) is updated in following attributes:

	
- Custom Data Type = get CustomDataType code matching CustomDataTypeDefinition library
	
- Required = Custom Data Def.Mandatory Flag

Case CustomDataType in (NUMBER, TEXT, INTEGER)

	
- Length Min = Custom Data Def.Min Length
	
- Length Max = Custom Data Def.Max Length
	
- Value Min = Null
	
- Value Max = Null

Case CustomDataType =  CUSTOM

	
- Length Min =
	
- Length Max =
	
- Value Min =
	
- Value Max =

Case CustomDataType = ENUM 

	
- Length Min = Null
	
- Length Max = Null
	
- Value Min = Null
	
- Value Max = Null



Getting CustomDataType code matching CustomDataTypeDefinition library

	
- Select Custom Data Type from Custom Data Def based on Insurance Custom Data Def.Custom Data Def Code =  Custom Data Def.Code
	
- Map the Custom Data Type result to CustomDataTypeDefinition library code:
Case NUMBER = set NUMBER
Case TEXT = set TEXT
Case INTEGER = If Max Length is not NULL, set NUMBER, else set INT_VALUE
Case ENUM = 
Case CUSTOM = ?TODO? mapovaci tabule?


Select example:
select cdd.INSURANCE_PROGRAM_ID, cdd.CUSTOM_DATA_DEF_CODE, cus.CUSTOM_DATA_TYPE, cus.MANDATORY_FLAG, 
cus.MIN_LENGTH, cus.MAX_LENGTH, cus.BEAN_NAME, cus.ENUM_SOURCE from HO.BSL_INSURANCE_PROGRAM ip
join HO.BSL_INSUR_CUST_DATA_DEF cdd on cdd.INSURANCE_PROGRAM_ID = ip.id
join HO.BSL_CUSTOM_DATA_DEF cus on cdd.CUSTOM_DATA_DEF_CODE = cus.CODE
where 1=1
and cus.CUSTOM_DATA_TYPE in ('CUSTOM', 'TEXT', 'NUMBER', 'ENUM', 'INTEGER')
--and cus.ENUM_SOURCE is not null
and cdd.ARCHIVED = 0;

Select example (insurance custom data only): 
select icd.INSURANCE_PROGRAM_ID, icd.CUSTOM_DATA_DEF_CODE, cus.CUSTOM_DATA_TYPE, cus.MANDATORY_FLAG, 
cus.MIN_LENGTH, cus.MAX_LENGTH, cus.BEAN_NAME, cus.ENUM_SOURCE from HO.BSL_INSURANCE_PROGRAM ip
join HO.BSL_INSUR_CUST_DATA_DEF icd on icd.INSURANCE_PROGRAM_ID = ip.id
join HO.BSL_CUSTOM_DATA_DEF_4_INSR cus on cus.code = icd.CUSTOM_DATA_DEF_CODE
--join HO.BSL_CUSTOM_DATA_DEF cus on icd.CUSTOM_DATA_DEF_CODE = cus.CODE
where 1=1
--and ip.id = 152267551
and cus.CUSTOM_DATA_TYPE in ('CUSTOM', 'TEXT', 'NUMBER', 'ENUM', 'INTEGER')
--and cus.ENUM_SOURCE is not null
--and cus.MIN_LENGTH is null 
--and cus.MAX_LENGTH is null
--and cus.MANDATORY_FLAG is null
and icd.ARCHIVED = 0
;

## 🔗 Connections (1)

- ← Dependency: [[08.506 Set Custom Data Definition for Insurance Program (UseCase 1654041)]]

## 📊 Appears In (1 diagrams)

- Use Case: IP - Custom Data - Use Case Model
