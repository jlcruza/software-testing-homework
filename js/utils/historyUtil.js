const NO_DATA_NEEDED = {}
const UNUSED = "" // This parameter exists for historical reasons, and cannot be omitted;

export function goBackInHistory()
{
    history.back();
}

export function goForwardInHistory()
{
    history.forward();
}

export function navigateTo(endpoint)
{
    history.pushState(NO_DATA_NEEDED, UNUSED, endpoint);
    history.go();
}