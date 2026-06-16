import { useState } from "react";
import { Link } from "react-router-dom";
import { usePotatoAgent } from "../contexts/PotatoAgentContext.jsx";

function PotatoAgentModal() {
    const [userMessage, setUserMessage] = useState("");

    const {
        isAgentOpen,
        messages,
        isLoading,
        openAgent,
        closeAgent,
        askPotatoAgent,
    } = usePotatoAgent();

    function handleSubmit(event) {
        event.preventDefault();

        if (!userMessage.trim()) {
            return;
        }

        askPotatoAgent(userMessage);
        setUserMessage("");
    }

    return (
        <>
            <button
                type="button"
                className="btn potato-agent-floating-btn"
                onClick={openAgent}
                aria-label="Apri Pata-Agente"
            >
                🥔
                <span>Sei indeciso e non sai che patata scegliere?</span>
            </button>

            {isAgentOpen && (
                <div className="potato-agent-overlay">
                    <div className="potato-agent-panel">
                        <div className="potato-agent-modal-header">
                            <div>
                                <span className="potato-agent-kicker">
                                    Assistente patatoso
                                </span>

                                <h2>Pata-Agente</h2>
                            </div>

                            <button
                                type="button"
                                className="potato-agent-close-btn"
                                onClick={closeAgent}
                                aria-label="Chiudi"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="potato-agent-modal-body">
                            <div className="potato-agent-messages">
                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={
                                            message.role === "user"
                                                ? "potato-message user-message"
                                                : "potato-message agent-message"
                                        }
                                    >
                                        <p>{message.text}</p>

                                        {message.product && (
                                            <div className="potato-agent-product">
                                                <strong>{message.product.name}</strong>

                                                <span>
                                                    €{" "}
                                                    {Number(message.product.price)
                                                        .toFixed(2)
                                                        .replace(".", ",")}
                                                </span>

                                                <Link
                                                    to={`/products/${message.product.id}`}
                                                    onClick={closeAgent}
                                                >
                                                    Vedi prodotto
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {isLoading && (
                                    <div className="potato-message agent-message">
                                        <p>Sto consultando l’oracolo della patata...</p>
                                    </div>
                                )}
                            </div>

                            <form onSubmit={handleSubmit} className="potato-agent-form">
                                <input
                                    type="text"
                                    value={userMessage}
                                    onChange={(event) => setUserMessage(event.target.value)}
                                    placeholder="Es. Voglio qualcosa di croccante e in offerta"
                                />

                                <button type="submit" disabled={isLoading}>
                                    Chiedi
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default PotatoAgentModal;