## Components in this Repo

### 1. GetObjectInfo LWC

**getObjectInfo & getObjectInfos**

- `getObjectInfo` is a wire adapter used to retrieve metadata of a single Salesforce object, including fields, record types, child relationships, and object-level information.  
- `getObjectInfos` allows fetching metadata for multiple objects in a single call.  
- Both are reactive and can be used in **function** or **property** style with `@wire`.

**What this component does:**

- Fetches **default record type IDs** and **child relationships** for Account and Opportunity objects.  
- Demonstrates accessing nested metadata like `childRelationships[0].childObjectApiName`.  
- Template displays default record type ID and the first child relationship.

### 2. GetPicklistValues LWC

 **getPicklistValues & getPicklistValuesByRecordType**

- `getPicklistValues` retrieves picklist values for a field based on a record type ID.  
- `getPicklistValuesByRecordType` provides all picklist values for an object grouped by record types.  
- These wire adapters are used to dynamically populate dropdowns (`lightning-combobox`) in LWCs.

**What this component does:**

- Uses `getObjectInfo` to get the default record type ID for picklist queries.  
- Dynamically populates **lightning-combobox** dropdowns for Industry and Type.  
- Displays the selected picklist values in the template.
