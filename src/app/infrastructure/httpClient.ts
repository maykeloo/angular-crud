export class RestClient {
  private BASE = 'http://localhost:3000' as const;

  async get<ResponseType>(url: string): Promise<ResponseType> {
    const response = await fetch(`${this.BASE}/${url}`);
    const data = await response.json();
    return data as ResponseType;
  }

  async post<ResponseType, DataType>(
    url: string,
    data: DataType
  ): Promise<ResponseType> {
    const response = await fetch(`${this.BASE}/${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData as ResponseType;
  }

  async patch<ResponseType, DataType>(
    url: string,
    data: DataType
  ): Promise<ResponseType> {
    const response = await fetch(`${this.BASE}/${url}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData as ResponseType;
  }

  async delete(url: string): Promise<void> {
    await fetch(`${this.BASE}/${url}`, {
      method: 'DELETE'
    });
  }
}