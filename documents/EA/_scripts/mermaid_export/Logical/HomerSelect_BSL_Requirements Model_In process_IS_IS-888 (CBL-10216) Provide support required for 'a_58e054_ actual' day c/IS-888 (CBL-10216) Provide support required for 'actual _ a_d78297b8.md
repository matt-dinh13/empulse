# IS-888 (CBL-10216) Provide support required for 'actual / actual' day count convention for JL tie-up with DBS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-888 (CBL-10216) Provide support required for 'actual / actual' day count convention for JL tie-up with DBS
- **Diagram ID**: 131153
- **Elements**: 10
- **Connectors**: 5

```mermaid
classDiagram
    class MOD_Generate_installment_schedule_algorithm["{MOD}Generate installment schedule algorithm"]
    class Update_Installment_schedule_algorithm["Update Installment schedule algorithm"]
    class REQ2_IS_954_ACT_ACT_joint_lending_DBS_get_lender_settings_fr["REQ2 (IS-954) - ACT/ACT - joint lending - DBS - get lender settings from BSL_LENDER, keep global param as backup default value"]
    class MOD_Lender["{MOD}Lender"]
    class REQ1_IS_953_Global_parameter_replacement_by_CSD_JOINT_LENDER["REQ1 (IS-953) - Global parameter replacement by CSD JOINT LENDER settings"]
    class Update_BSL_LENDER_entity_structure_synchronized_from_CSD["Update BSL_LENDER entity structure synchronized from CSD"]
    class Integrated_Codelists["Integrated Codelists"]
    class REQ1["REQ1"]
    class REQ2["REQ2"]
    Update_BSL_LENDER_entity_structure_synchronized_from_CSD ..> Integrated_Codelists : unnamed
    REQ1_IS_953_Global_parameter_replacement_by_CSD_JOINT_LENDER ..> Update_BSL_LENDER_entity_structure_synchronized_from_CSD : unnamed
    Update_BSL_LENDER_entity_structure_synchronized_from_CSD ..> MOD_Lender : unnamed
    REQ2_IS_954_ACT_ACT_joint_lending_DBS_get_lender_settings_fr o-- Update_Installment_schedule_algorithm : unnamed
    Update_Installment_schedule_algorithm ..> MOD_Generate_installment_schedule_algorithm : unnamed
```
