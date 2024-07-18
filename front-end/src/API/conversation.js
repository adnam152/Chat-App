import axios from "axios";

export default function conversationAPI() {
    return {
        async getConversation() {
            try {
                const response = await axios.get('http://localhost:5000/api/conversation');
                return response.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async searchConversation(username) {
            try {
                const response = await axios.get(`http://localhost:5000/api/conversation/search/${username}`);
                return response.data;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        async setReadLastMessage(conversationId) {
            try {
                await axios.put(`http://localhost:5000/api/conversation/read/${conversationId}`);
            } catch (error) {
                return Promise.reject(error);
            }
        }
    }
}