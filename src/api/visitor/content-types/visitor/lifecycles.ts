export default {
  beforeCreate(event: { params: { data: any } }) {
    const { data } = event.params;
    if (data.signature) {
      // Aquí puedes realizar cualquier procesamiento necesario
      // Por ejemplo, validar que es una cadena base64 válida
      if (!isValidBase64(data.signature)) {
        throw new Error("Invalid signature format");
      }
    }
  },
  afterFindOne(event: { result: any }) {
    const { result } = event;
    if (result && result.signature) {
      // Aquí puedes realizar cualquier procesamiento post-recuperación
    }
  },
};

function isValidBase64(str: string): boolean {
  try {
    return btoa(atob(str)) == str;
  } catch (err) {
    return false;
  }
}
