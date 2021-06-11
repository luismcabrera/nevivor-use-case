/** -----------
 *  Imports
 * ------------ */

/** React hook used to read information from a context, this will work as long as
 * the function below the GlobalStateProvider is called */
import { useContext } from "react";

/** The context to consume */
import { GlobalStateContext } from "../global/providers/GlobalStateProvider";

/** -----------
 *  Custom Hook
 * ------------ */

/** The purpose of this hook is to return the information extracted from the GlobalStateProvider */
export default function useGlobalState() {
  return useContext(GlobalStateContext);
}
