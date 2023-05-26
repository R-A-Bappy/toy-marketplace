import useTitle from "../../hook/useTitle";



const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            <main>
                <section className="w-11/12 md:w-10/12 mx-auto mt-10">
                    <div className="py-4 rounded">
                        <h2 className="bg-violet-600 text-xl font-medium p-2"><span className="font-bold">Question:</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <h4 className="bg-violet-400 p-2"><span className="font-bold pr-3">Answer:</span>Access Token: When a user logs in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server.<br />Refresh Token: As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to refresh the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.<br /> When we have refresh token rotation in place, we can store tokens in local storage, browser memory, cookies or http only cookies.</h4>
                    </div>
                    <div className="py-4 rounded">
                        <h2 className="bg-violet-600 p-2 text-xl font-medium"><span className="font-bold">Question:</span> Compare SQL and NoSQL databases?</h2>
                        <h4 className="bg-violet-400 p-2"><span className="font-bold pr-3">Answer:</span> <ul className="list-disc pl-8">
                            <li>SQL databases are relational, and NoSQL databases are non-relational.</li>
                            <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                            <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                            <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                            <li>SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                        </ul></h4>
                    </div>
                    <div className="py-4 rounded">
                        <h2 className="bg-violet-600 p-2 text-xl font-medium"><span className="font-bold">Question:</span> What is express js? What is Nest JS ?
                        </h2>
                        <h4 className="bg-violet-400 p-2"><span className="font-bold pr-3">Answer:</span> Express JS: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.<br />Next JS: Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</h4>
                    </div>
                    <div className="py-4 rounded">
                        <h2 className="bg-violet-600 text-xl p-2 font-medium"><span className="font-bold">Question:</span> What is MongoDB aggregate and how does it work ?</h2>
                        <h4 className="bg-violet-400 p-2"><span className="font-bold pr-3">Answer:</span> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on. </h4>
                    </div>
                </section>
            </main>
        </div>
    )
};

export default Blog;