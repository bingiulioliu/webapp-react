import { createContext, useContext, useState } from "react";

const PotatoAgentContext = createContext();

function PotatoAgentProvider({ children }) {
    const [isAgentOpen, setIsAgentOpen] = useState(false);

    const [messages, setMessages] = useState([
        {
            role: "agent",
            text: "Ciao! Sono il Pata-Agente 🥔 Dimmi cosa cerchi e ti consiglio il prodotto giusto.",
        },
    ]);

    const [isLoading, setIsLoading] = useState(false);

    function openAgent() {
        setIsAgentOpen(true);
    }

    function closeAgent() {
        setIsAgentOpen(false);
    }

    function addMessage(message) {
        setMessages((currentMessages) => [...currentMessages, message]);
    }

    async function askPotatoAgent(userMessage) {
        addMessage({
            role: "user",
            text: userMessage,
        });

        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:3000/ai/potato-agent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: userMessage,
                }),
            });

            if (!response.ok) {
                throw new Error("Errore nella risposta dell'agente");
            }

            const data = await response.json();

            addMessage({
                role: "agent",
                text: data.reply,
                product: data.product,
            });
        } catch (error) {
            console.error(error);

            addMessage({
                role: "agent",
                text: "Il Pata-Agente è momentaneamente fritto. Riprova tra poco.",
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <PotatoAgentContext.Provider
            value={{
                isAgentOpen,
                messages,
                isLoading,
                openAgent,
                closeAgent,
                askPotatoAgent,
            }}
        >
            {children}
        </PotatoAgentContext.Provider>
    );
}

function usePotatoAgent() {
    return useContext(PotatoAgentContext);
}

export { PotatoAgentProvider, usePotatoAgent };