# WireUserDetails LWC

This Component demonstrates how to use the `@wire` decorator in two ways:

1. **Function style**: `userDetailsHandler` — allows custom handling of `data` and `error`.
2. **Property style**: `userDetails` — stores response automatically.

It fetches the current user's **Name** and **Email** using the `getRecord` adapter.

- Uses schema imports (`@salesforce/schema/User.Name` and `User.Email`) for safer field referencing.
- Also demonstrates string literal field names for comparison.

Template displays user details for both approaches.

---

**Purpose**: Learning and comparing `@wire` function vs property styles.
